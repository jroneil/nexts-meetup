import { MeetupDetail } from "../../components/meetups/MeetupDetail";

function MeetupDetail(){
    return(
        <MeetupDetail image= 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
            title='A first meetup' 
            address='Meetupstreet 5, 12345 Meetup City '
            description='This is a fun adventure'
        />
    );
}
export default MeetupDetail;