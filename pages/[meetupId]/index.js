import MeetupDetail from "../../components/meetups/MeetupDetail";
//C:\dev\nextws\nexts-meetup\components\meetups\MeetupDetail.js
function MeetupDetails() {
    return (
        <MeetupDetail image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
            title='A first meetup'
            address='Meetupstreet 5, 12345 Meetup City '
            description='This is a fun adventure'
        />
    );
}
export async function getStaticPaths() {
    return {
        //is id does not match 404 error
        //true if pages have not yet been generated
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "m1"
                },
            },
            {
                params: {
                    meetupId: "m2"
                },
            },
        ]
    }
}
export async function getStaticProps(context) {
    // will never end up on client
    //fetch data from api
    //props need to be name props and needs to be a object
    //this is server side rendered
    console.log(context.params.meetupId);
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
                id: meetupId,
                title: 'A first meetup',
                address: 'Meetupstreet 5, 12345 Meetup City ',
                description: 'This is a fun adventure'
            }
        },
        // refresh page every 10 seconds or 1 second if data changes
        //all the time
        revalidate: 10
    };
}
export default MeetupDetails;