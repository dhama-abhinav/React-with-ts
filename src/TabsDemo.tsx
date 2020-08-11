import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const  TabViewDemo : React.FC = ()=> {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>First</Tab>
                    <Tab>Second</Tab>
                    <Tab>Third</Tab>
                    <Tab>Fourth</Tab>
                </TabList>
                <TabPanel>
                    <h2>For first</h2>
                </TabPanel>
                <TabPanel>
                    <h2>for second</h2>
                </TabPanel>
                <TabPanel>
                    <h2>for third</h2>
                </TabPanel>
                <TabPanel>
                    <h2>for fourth</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}
export default TabViewDemo
