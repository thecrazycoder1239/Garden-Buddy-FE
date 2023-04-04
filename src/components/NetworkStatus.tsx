import useOnlineStatus from "../hooks/useOnlineStatus";

export default function NetworkStatus() {
  const online = useOnlineStatus();

  return (
    <>
    {
      online ?
      <p className="NetworkStatus"
      style={{
        transition: '1s',
        background: 'none',
        padding: '0'
      }}></p> :
      <p className="NetworkStatus"
      style={{
        transition: '1s',
        background: 'lightcoral',
        padding: '10px'
      }}
      >You are offline :(</p>
    }
    </>
  )
}