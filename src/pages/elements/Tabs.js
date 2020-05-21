import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import TabsIconSection from "../../components/Tabs/TabsIconSection";
import TabsDefault from "../../components/Tabs/TabsDefault";

const Tabs = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Tabs" />
    <TabsDefault />
    <TabsIconSection title="Icon Tabs" />
  </Loader>
);

export default Tabs;
