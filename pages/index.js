/*Not needed use getStaticProps
import { useEffect, useState } from 'react';
*/
import MeetupList from '../components/meetups/MeetupList';
const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];
function HomePage(props) {
    /*  Not needed use getStaticProps
     const[loadedMeetups,SetLoadedMeetups]= useState([])
       useEffect(()=>{
           //send http request and fetch data
           SetLoadedMeetups(DUMMY_DATA);
       },[])*/

    return (

        //meetups is from the meetups object
        <MeetupList meetups={props.meetups}></MeetupList>
    )

}
export async function getStaticProps() {
    // will never end up on client
    //fetch data from api
    //props need to be name props and needs to be a object
    //this is server side rendered
    return {
        props: {
            meetups: DUMMY_DATA
        },
        // refresh page every 10 seconds or 1 second if data changes
        //all the time
        revalidate: 10
    };
}
//realtime
/*export async function getServerSideProps(context){
    const req=context.req;
    const res= context.res;

    return{
        props:{
            meetups:DUMMY_DATA
        }
}

}*/
export default HomePage;