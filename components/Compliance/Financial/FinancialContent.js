'use client'
import React from 'react'
import { Container } from 'react-bootstrap'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../complience.css'

const FinancialContent = () => {
    return (
        <Container className='p-0 text-center'>
            <h2 className='text-green fw-bolder'>Financials</h2>
            <h4 className='text-green fw-lighter py-4'>Financial Report for the year</h4>

            <Tabs className="text-start py-2">
                <TabList>
                    <Tab>2018-19</Tab>
                    <Tab>2017-18</Tab>
                    <Tab>2016-17</Tab>
                    <Tab>2015-16</Tab>
                    <Tab>2014-15</Tab>
                    <Tab>2013-14</Tab>
                    <Tab>2012-13</Tab>
                </TabList>

                <TabPanel className="mt-2">
                    {/* <h2>Any content 1</h2> */}
                </TabPanel>
                <TabPanel>
                    {/* <h2>Any content 2</h2> */}
                </TabPanel>
            </Tabs>
        </Container>
    )
}

export default FinancialContent