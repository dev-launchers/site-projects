import { Form, Question, FormLabel, FromInput, SubmitInput } from "./StyledApplyForm";
import Slider from "react-slick";
import { useForm } from "react-hook-form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function ApplyForm() {
  const {register, handleSubmit, formState} = useForm({mode: 'onChange'})
  return (
    <Form>
      <Slider {...settings}>
        <div>
          <FormLabel htmlFor="Name">Name</FormLabel>
          <Question>Please enter your full name!</Question>
          <FromInput id="Name"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Role">Role</FormLabel>
          <Question>Which role are you applying for?</Question>
          <FromInput id="Role"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Email">Email</FormLabel>
          <Question>Which role are you applying for?</Question>
          <FromInput id="Email"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Age">Age</FormLabel>
          <Question>Which role are you applying for?</Question>
          <FromInput id="Age"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Level">Level</FormLabel>
          <Question>Which role are you applying for?</Question>
          <FromInput id="Level"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Experience">Experience</FormLabel>
          <Question>Which role are you applying for?</Question>
          <FromInput id="Experience"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Reason">Reason</FormLabel>
          <Question>Which role are you applying for?</Question>
          <FromInput id="Reason"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Acept">Acept</FormLabel>
          <Question>Which role are you applying for?</Question>
          <FromInput id="Acept"></FromInput>
          <br/>
          <SubmitInput />
        </div>
    
      </Slider>
    </Form>
  );
}

export default ApplyForm;
