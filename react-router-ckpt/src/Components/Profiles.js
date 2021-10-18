import Profile from "./Profile"
import logo from '../logo.svg';
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";


export default function Profiles({ props }) {
  let { path, url } = useRouteMatch();
  const contactProfiles = [
    {
      firstName: "Naruto",
      lastName: "Uzumaki",
      birthday: 'October 10 2000',
      profileImage: "https://i.gifer.com/TBtd.gif"
    },
    {
      firstName: "Issei",
      lastName: "Hyoudou",
      birthday: 'April 16 2003',
      profileImage: "https://i.imgur.com/IOwkFlG.gif?noredirect"
    },
    {
      firstName: "Kaley",
      lastName: "Kuoco",
      birthday: 'November 30 1985',
      profileImage: "https://c.tenor.com/bTBXfjC01k8AAAAM/kaley-cuoco-fistbump.gif"
    },
    {
      firstName: "React",
      lastName: "Ion",
      birthday: "May 29 2013",
      profileImage: logo
    }
  ];

  return (
    <div>
      <ul>
        {contactProfiles.map((friend, index) => {
          return (
            <Link key={index} to={`${url}/${friend.firstName}`}>
              <Profile data={friend} />
            </Link>
          );
        })}
      </ul>
      <Switch>
        <Route to={`${path}/:id`} >
          <>
          </>
        </Route>
      </Switch>
    </div>
  );
}