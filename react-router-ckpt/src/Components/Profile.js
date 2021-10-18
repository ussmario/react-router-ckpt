import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
export default function Profile({ data }) {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <li>
        <Link to={`${url}/${data.firstName}`}>
          {data.firstName}
        </Link>
      </li>
      <li>
        {data.lastName}
      </li>
      <li>
        {data.birthday}
      </li>
      <li>
        <img src={data.profileImage} height='150vh' width='auto' alt={data.firstName} />
      </li>
      <Switch>
        <Route to={`${path}/:id`} >
          <>
          </>
        </Route>
      </Switch>
      </div >
  )
}