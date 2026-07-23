export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    // Read as text, not .json() — sendBeacon sends text/plain by default
    const data = JSON.parse(await request.text());
    if (!data.sid || !data.path) {
      return new Response("bad request", { status: 400 });
    }

    const isLeave = data.type === "pageleave";
    await env.DB.prepare(
      `INSERT INTO events (session_id, path, event_type, duration_ms)
       VALUES (?, ?, ?, ?)`
    ).bind(
      data.sid,
      data.path,
      isLeave ? "pageleave" : "pageview",
      isLeave ? (data.duration ?? null) : null
    ).run();

    return new Response(null, { status: 204 });
  } catch (e) {
    return new Response("error", { status: 500 });
  }
}