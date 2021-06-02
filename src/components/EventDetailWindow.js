import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';

const Form = styled.div`
    width: 500px;
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
  padding: 16px;
`;

const DetailCell = styled.td` 
  padding: 8px;
`


const LeftData = styled(DetailCell)`
font-weight: bold;
width: 50%;
`;

const RightData = styled(DetailCell)``;


export const EventDetailWindow = ({ item:event, date:date, close = () => {} }) => {
  const { time, description, eventName, jointEvent, guest, eventId } = event || {};

  return (
    <Form>
      <Heading>Detail about event on { date }</Heading>
      <DetailSection>
        <tbody>
          <tr>
            <LeftData>Event Name:</LeftData>
            <RightData>{ eventName }</RightData>
          </tr>
          <tr>
            <LeftData>Time:</LeftData>
            <RightData>{ time }</RightData>
          </tr>
          <tr>
            <LeftData>Description:</LeftData>
            <RightData>{ description }</RightData>
          </tr>
          {jointEvent &&
            <tr>
              <LeftData>This event with:</LeftData>
              <RightData>{ guest }</RightData>
            </tr>
          }
        </tbody>
      </DetailSection>
      <CommentList eventId={eventId}/>
      <AddComment eventId={eventId} onSubmitComment={close}/>
      <Button onClick={close}>Cancel</Button>
    </Form>
  )
}

export default EventDetailWindow;