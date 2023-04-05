export default function LogHistory({logs}: {logs: Log[]}) {

  const copiedLogs = [...logs];

  return (
    <>
      <section className="log-history">
        <h2>Previous Logs:</h2>
        <ul>
          {
            copiedLogs.map(log => {
              return <li>{new Intl.DateTimeFormat('en-UK', {
                year: 'numeric', month: 'numeric', day: 'numeric'
              }).format(new Date(log.log_date))}: {log.body}</li>
            })
          }
        </ul>
      </section>
      <div className="line-break"></div>
    </>
  );
}
