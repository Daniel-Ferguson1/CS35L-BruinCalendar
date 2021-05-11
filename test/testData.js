// Suppose one user has this set of events (other user other sets of events).

// README: For now, the strings are just string, so if you want, 
// you can easily change or add accoringy or you can automate it.

const events = [{
    dateTime: '2022-04-10 13:00',
    eventid: '12312',
    userId: 'AJAJ0DmiHogY1iNElgtAvt7GBsE3',
    eventName: "Quinceañera",
    urgency: 1, // like deadline or soemthing.
    schoolness: 1, // what was this for?
    description: "This is such and such."
}, {
    dateTime: '2031-07-16 04:21',
    eventid: '72773',
    userId: 'AJAJ0DmiHogY1iNElgtAvt7GBsE3',
    eventName: "Some Event",
    urgency: 0,
    schoolness: 1,
    description: "Foo and Foo I do Bar Bar."
}, {
    dateTime: '2011-09-15 07:30', //past
    eventid: '15531',
    userId: 'AJAJ0DmiHogY1iNElgtAvt7GBsE3',
    eventName: "Such and Such Event",
    urgency: 1,
    schoolness: 1,
    description: "Foo and Foo I do Bar Bar."
}, {
    dateTime: '2011-08-26 06:30', 
    eventid: '12345',
    userId: 'AJAJ0DmiHogY1iNElgtAvt7GBsE3',
    eventName: "Such and Such Event",
    urgency: 1,
    schoolness: 1,
    description: "Foo and Foo I do Bar Bar."
}, {
    dateTime: '2024-05-18 04:13', 
    eventid: '48671',
    userId: 'AJAJ0DmiHogY1iNElgtAvt7GBsE3',
    eventName: "Such and Such Event",
    urgency: 1,
    schoolness: 1,
    description: "Foo and Foo I do Bar Bar."
}, {
    dateTime: '2022-08-02 11:10',
    eventid: '40293',
    userId: 'AJAJ0DmiHogY1iNElgtAvt7GBsE3',
    eventName: "Such and Such Event",
    urgency: 1,
    schoolness: 1,
    description: "Foo and Foo I do Bar Bar."
}, {
    dateTime: '2026-03-02 15:20', 
    eventid: '96823',
    userId: 'AJAJ0DmiHogY1iNElgtAvt7GBsE3',
    eventName: "Such and Such Event",
    urgency: 1,
    schoolness: 1,
    description: "Foo and Foo I do Bar Bar."
}, {
    dateTime: '2022-08-02 11:52',
    eventid: '48821',
    userId: 'AJAJ0DmiHogY1iNElgtAvt7GBsE3',
    eventName: "Such and Such Event",
    urgency: 1,
    schoolness: 1,
    description: "Foo and Foo I do Bar Bar."
}, {
    dateTime: '2022-11-02 08:34', 
    eventid: '32911',
    userId: 'AJAJ0DmiHogY1iNElgtAvt7GBsE3',
    eventName: "Such and Such Event",
    urgency: 1,
    schoolness: 1,
    description: "Foo and Foo I do Bar Bar."
}, {
    dateTime: '2024-05-02 04:10', 
    eventid: '43814',
    userId: 'AJAJ0DmiHogY1iNElgtAvt7GBsE3',
    eventName: "Such and Such Event",
    urgency: 1,
    schoolness: 1,
    description: "Foo and Foo I do Bar Bar."
}];

module.exports = {
    events,
};

// TODO format thsoe data into appropriate type. Node doc or Firebase doc??