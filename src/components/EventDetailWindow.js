import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';
import './EventDetailWindow.css'

const Form = styled.div`
    width: 550px;
    margin: 0 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled.h1`
  font-weight: bold;
  margin-top: 0px;
  padding-top: 16px;
  text-align: center;
`;

const DetailSection = styled.table` 
  text-align: left;
  font-size: 20px;
`;

const DetailCell = styled.td` 
  padding: 8px;
`


const LeftData = styled(DetailCell)`
font-weight: bold;
width: 50%;
`;

const RightData = styled(DetailCell)``;

var convertTime = require('convert-time');  

export const EventDetailWindow = ({ item:event, date:date, close = () => {} }) => {
  const { time, description, eventName, jointEvent, guest, eventId } = event || {};

  return (
    <Form>
      <Heading>Details about Event on { date }</Heading>
      <DetailSection>
        <tbody class='eventinfo'>
          <tr>
            <LeftData>Event Name: </LeftData>
            <RightData>{ eventName }</RightData>
          </tr>
          <tr>
            <LeftData>Time: </LeftData>
            <RightData>{ time }</RightData>
          </tr>
          <tr>
            <LeftData>Description: </LeftData>
            <RightData>{ description }</RightData>
          </tr>
          {jointEvent &&
            <tr>
              <LeftData>This event with: </LeftData>
              <RightData>{ guest }</RightData>
            </tr>
          }
        </tbody>
      </DetailSection>
      <div>
        <CommentList eventId={eventId}/>
      </div>
      <AddComment eventId={eventId} onSubmitComment={close}/>
      <Button className="cancel" onClick={close}>Cancel</Button>
    </Form>
  )
}

export default EventDetailWindow;