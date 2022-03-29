import NewMeetupForm from'../../components/meetups/NewMeetupForm';
function NewMeetupPage(){
    function addMeetupHandle(enteredMeetupData){
        console.log(enteredMeetupData);
    }
    return(
<NewMeetupForm onAddMeetup={addMeetupHandle}></NewMeetupForm>
    )
}
export default NewMeetupPage;