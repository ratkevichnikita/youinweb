import {
  ABOUT_ROUTE,
  CASES_ROUTE,
  CONTACTS_ROUTE,
  MAIN_PAGE_ROUTE,
  NEWS_ROUTE,
  SERVICES_ROUTE,
  SINGLE_CASE_ROUTE,
  SINGLE_SERVICE_ROUTE,
  TEAM_ROUTE,
  SINGLE_NEWS_ROUTE,
} from "./utils/consts";

import MainPage from "./pages/mainPage/mainPage";
import Cases from "./pages/Cases/Cases";
import Case from "./pages/Cases/Case/Case";
import Service from "./pages/Services/Service/Service";
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts";
import News from "./pages/News/News";
import Team from "./pages/Team/Team";
import About from "./pages/About/About";
import SingleNews from "./pages/News/SingleNews/SingleNews";

export const Routes = [
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainPage
  },
  {
    path: SINGLE_CASE_ROUTE,
    Component: Case
  },
  {
    path: CASES_ROUTE,
    Component: Cases
  },
  {
    path: SINGLE_SERVICE_ROUTE,
    Component: Service
  },
  {
    path: SERVICES_ROUTE,
    Component: Services
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts
  },
  {
    path: NEWS_ROUTE,
    Component: News
  },
  {
    path: TEAM_ROUTE,
    Component: Team
  },
  {
    path: ABOUT_ROUTE,
    Component: About
  },
  {
    path: SINGLE_NEWS_ROUTE,
    Component: SingleNews
  }
]