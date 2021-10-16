import {
  Form,
  Question,
  FormLabel,
  FromInput,
  SubmitInput
} from "./StyledApplyForm";
import Slider from "react-slick";
import { useForm } from "react-hook-form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function ApplyForm() {
  const { register, handleSubmit, formState} = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Slider {...settings}>
        <div>
          <FormLabel htmlFor="Name">Name</FormLabel>
          <Question>Please enter your full name!</Question>
          <FromInput {...register('Name', {required:true})} id="Name"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Role">Role</FormLabel>
          <Question>Which role are you applying for?</Question>
          <FromInput {...register('Role', {required:true})} id="Role"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Email">Email</FormLabel>
          <Question>How should we contact you?</Question>
          <FromInput type='email' {...register('Email', {required:true})} id="Email"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Age">Age</FormLabel>
          <Question>
            We are actively seeking members 16+, but exceptions are made for
            exceptional young people
          </Question>
          <FromInput {...register('Age', {required:true})} type="number" id="Age"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Level">Level</FormLabel>
          <Question>What is your level of experience?</Question>
          <select {...register('Level', {required:true})} style={{ width: "90%", fontFamily: "Abel" }} id="Level">
            <option value="">Select...</option>
            <option value="Beginner (No development experience)">
              Beginner (No development experience)
            </option>
            <option value="Intermediate (Some development experience, but no large projects)">
              Intermediate (Some development experience, but no large projects)
            </option>
            <option value="Advanced (Have completed large projects, worked in a team, etc.)">
              {" "}
              Advanced (Have completed large projects, worked in a team, etc.)
            </option>
          </select>
        </div>
        <div>
          <FormLabel htmlFor="Experience">Experience</FormLabel>
          <Question>
            Briefly describe any relevant experience you have [optional]
          </Question>
          <FromInput {...register('Experience', {required:false})} id="Experience"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Reason">Reason</FormLabel>
          <Question>
            Why do you want to join this project? (Hint: Are you looking to
            learn? Help others learn? Gain experience? Build something epic?)
            [optional]
          </Question>
          <FromInput {...register('Reason', {required:false})} id="Reason"></FromInput>
        </div>
        <div>
          <FormLabel htmlFor="Accept">Acept</FormLabel>
          <Question>
            𝘼𝙡𝙡 𝙢𝙚𝙢𝙗𝙚𝙧𝙨 𝙖𝙧𝙚 𝙚𝙭𝙥𝙚𝙘𝙩𝙚𝙙 𝙩𝙤 𝙖𝙩𝙩𝙚𝙣𝙙 𝙩𝙝𝙚 𝙣𝙪𝙢𝙗𝙚𝙧 𝙤𝙛 𝙡𝙖𝙗𝙨 𝙨𝙚𝙡𝙚𝙘𝙩𝙚𝙙 𝙖𝙗𝙤𝙫𝙚
            𝙤𝙣 𝙖 𝙢𝙤𝙣𝙩𝙝𝙡𝙮 𝙗𝙖𝙨𝙞𝙨, 𝙤𝙧 𝙜𝙞𝙫𝙚 𝘿𝙚𝙫 𝙇𝙖𝙪𝙣𝙘𝙝𝙚𝙧𝙨 𝙧𝙚𝙖𝙨𝙤𝙣𝙖𝙗𝙡𝙚 𝙣𝙤𝙩𝙞𝙘𝙚 𝙤𝙛 𝙖𝙣𝙮
            𝙘𝙤𝙣𝙛𝙡𝙞𝙘𝙩𝙨 𝙤𝙧 𝙘𝙝𝙖𝙣𝙜𝙚𝙨 𝙞𝙣 𝙮𝙤𝙪𝙧 𝙨𝙘𝙝𝙚𝙙𝙪𝙡𝙚. 𝙔𝙤𝙪 𝙝𝙚𝙧𝙚𝙗𝙮 𝙖𝙜𝙧𝙚𝙚 𝙩𝙝𝙖𝙩 𝙮𝙤𝙪
            𝙬𝙞𝙡𝙡 𝙥𝙧𝙤𝙖𝙘𝙩𝙞𝙫𝙚𝙡𝙮 𝙘𝙤𝙢𝙢𝙪𝙣𝙞𝙘𝙖𝙩𝙚 𝙬𝙞𝙩𝙝 𝘿𝙚𝙫 𝙇𝙖𝙪𝙣𝙘𝙝𝙚𝙧𝙨 𝙢𝙚𝙢𝙗𝙚𝙧𝙨 𝙖𝙣𝙙 𝙨𝙩𝙖𝙛𝙛 𝙞𝙣
            𝙤𝙧𝙙𝙚𝙧 𝙩𝙤 𝙜𝙞𝙫𝙚 𝙣𝙤𝙩𝙞𝙘𝙚 𝙖𝙗𝙤𝙪𝙩 𝙮𝙤𝙪𝙧 𝙖𝙫𝙖𝙞𝙡𝙖𝙗𝙞𝙡𝙞𝙩𝙮 𝙩𝙤 𝙖𝙩𝙩𝙚𝙣𝙙 𝙨𝙚𝙨𝙨𝙞𝙤𝙣𝙨, 𝙖𝙣𝙙
            𝙍𝙎𝙑𝙋 𝙪𝙨𝙞𝙣𝙜 𝙤𝙪𝙧 𝙬𝙚𝙚𝙠𝙡𝙮 𝙨𝙞𝙜𝙣 𝙪𝙥 𝙨𝙝𝙚𝙚𝙩𝙨.
          </Question>
          <select {...register('Accept', {required:true})} id="Accept">
            <option value="I Accept">I Accept</option>
          </select>
          <SubmitInput disabled={!formState.isValid} style={{display:'block'}}/>
        </div>
      </Slider>
    </Form>
  );
}

export default ApplyForm;
