const AboutPage = () => {
  return (
    <>
      <h2>A Little Bit About Me</h2>
      <br/>
      <h3>As a teenager at school, I was the kid other students approached about issues with their phone or laptop. I was the go-to guy for fixing resolving any technical problems. 
<br/>
<br/>
Today, not much has changed. I’m still the first point of call for technical issues. The difference is I now also develop innovative software to solve the problems of real life. One of my most recent projects involved designing and rolling out a new piece of software to optimize the efficiency of slot bookings for certification exams. This contributed to a reduction in staff numbers and a 10% increase in bookings.


</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
