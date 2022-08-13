import AdminDashboard from "./AdminDashboard";
import SuperUserDashboard from "./SuperUserDashboard";
import useToken from "../helpers/useToken";

function HomePage() {
  const { token } = useToken();

  let component;
  if (token && token.roles && token.roles.length > 0) {
    let roles = token.roles;
    if (roles.includes(1)) {
      component = <SuperUserDashboard />;
    } else if (roles.includes(2)) {
      component = <AdminDashboard />;
    } else {
      component = "Normal User";
    }
  }
  return (
    <div>
      <h2>Dashboard</h2>
      {component}
    </div>
  );
}

export default HomePage;
