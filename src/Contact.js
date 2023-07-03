import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>

    <h2 className="common-heading">Feel Free to Contact</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28524.951446179413!2d77.58472644312187!3d26.66068086816178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973e1c9a4ea2137%3A0x91f121c1c1d274c2!2sBari%2C%20Rajasthan%20328021!5e0!3m2!1sen!2sin!4v1686068045590!5m2!1sen!2sin" width="1500" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xknalvlo" className="contact-inputs" method="POST">
          <input type="text" placeholder="Enter Your Username" name="Username" autoComplete="off" required />
          <input type="email" placeholder="Enter your Email" name="Email" autoComplete="off" required />
          <textarea name="Message" required autoComplete="off" placeholder="Enter the message" cols="30" rows="10"></textarea>
          <input type="submit" value="send" />
        </form>
      </div>
    </div>


  </Wrapper>;
};

export default Contact;
