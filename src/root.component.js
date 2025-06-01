import './sidebar.css';
export default function Root() {
  return (<div className="dashboard-shell">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <a href="/dashboard/overview">Overview</a><br />
          <a href="/dashboard/stats">User Stats</a><br />
          <a href="/dashboard/activity">Activity Feed</a>
        </nav>
       <main style={{ flex: 1, padding: "2rem" }}>
        <single-spa-router>
          <route path="/dashboard">
             <application name="@dissertation/dashboard-app"></application> 
          </route>
        </single-spa-router>
      </main>
      </div>
    </div>);
}
