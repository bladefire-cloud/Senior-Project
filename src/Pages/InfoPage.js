import { Container, Form, Image, Row } from "react-bootstrap"
import NavBar from "../Components/NavBar"
import Center from "../Components/center"


const InfoPage = () => {

  const group = {
    marginTop: '10%',
    backgroundColor: '#282c34',
    height: '100%'
  }

  const imageText = {
    display: "inline-block", 
    verticalAlign: 'top', 
    width: '640px', 
    paddingLeft: '15px', 
    color:'white'
  }

    return (
        <div style={{backgroundColor: '#282c34', height: '100%'}}>
        <NavBar/>
        
        <Image src="seallogo.png" thumbnail style={{width:150, height:140}}/>
        <div style={imageText}>
          <h1>Navy Seal</h1>
          <p>Navy SEALs have been described as “a unique breed of warrior,” able to perform in exceedingly arduous sea, land, and air operating environments; day and night and under all weather conditions. They are highly trained and often tasked to conduct the most grueling and complex missions, which they have superbly and unfailingly accomplished throughout several generations and today after more than a decade at war.</p>
        </div>
        <div style={group}>
        <Image src="swcclogo.jpg" thumbnail style={{width:150, height:140}}/>
        <div style={imageText}>
          <h1>Specail Warfare Combat Crewman (SWCC)</h1>
          <p>SWCC are trained extensively in craft and weapons tactics, techniques, and procedures; including parachuting with long-range craft aerial delivery systems. SWCC provide dedicated, rapid mobility in littoral and in-land waterway areas, where other maritime forces cannot operate. Like their SEAL counterparts, SWCCs are physically fit, highly motivated, combat-focused, and totally responsive in high stress situations.</p>
        </div>
        </div>
        <div style={{marginTop: '10%'}}>
        <Image src="rescueswimmerlogo.png" thumbnail style={{width:150, height:140}}/>
        <div style={imageText}>
          <h1>USCG Aviation Survival Technician (Rescue Swimmer)</h1>
          <p>Arguably the most widely 
recognized team of rescue-swimmer operators, the elite United States Coast Guard Aviation Survival Technician (AST)/Helicopter Rescue Swimmer team is called upon to respond in the most extreme rescue situations. High seas, medical evacuations, downed aviators, sinking vessels, and hurricanes are some of the deadly scenarios that Coast Guard rescue swimmers are trained to handle. </p>
        </div>
        </div>
        <div style={group}>
        <Image src="greenberetlogo.png" thumbnail style={{width:150, height:140}}/>
        <div style={imageText}>
          <h1>Army Green Beret</h1>
          <p>Green Berets, are America’s premier special operations force. The tip of the spear in the United States’ fight against diverse enemies worldwide, Green Berets are experts in unconventional warfare, counterterrorism, foreign internal defense, reconnaissance, direct action, hostage rescue, and other strategic missions.</p>
        </div>
        </div>
        <div style={group}>
        <Image src="rangerlogo.png" thumbnail style={{width:150, height:140}}/>
        <div style={imageText}>
          <h1>Army Ranger</h1>
          <p>The 75th Ranger Regiment is a lethal, agile and flexible force, capable of conducting many complex, joint special operations missions. Their capabilities include conducting airborne and air assault operations, seizing key terrain such as airfields, destroying strategic facilities, and capturing or killing enemies of the nation.</p>
        </div>
        </div>
        <div style={group}>
        <Image src="reconlogo.png" thumbnail style={{width:150, height:140}}/>
        <div style={imageText}>
          <h1>Marine Recon</h1>
          <p>United States Marine Corps Force Reconnaissance (FORECON) is a Special Operations Capable (SOC) force which primarily provides intelligence support to the Marine Air-Ground Task Force (MAGTF) higher command.</p>
        </div>
        </div>
        <div style={group}>
        <Image src="raiderlogo.png" thumbnail style={{width:150, height:140}}/>
        <div style={imageText}>
          <h1>Marine Raiders</h1>
          <p>Marine Raiders are a force, expeditionary in nature, prepared to thrive in uncertain, chaotic, and austere environments. Specialize in direct action, special reconnaissance, counterterrorism, foreign internal defense, security force assistance, and counterinsurgency.</p>
        </div>
        </div>
        <div style={group}>
        <Image src="marsoclogo.png" thumbnail style={{width:150, height:140}}/>
        <div style={imageText}>
          <h1>Marine Forces Special Operations Command (MARSOC)</h1>
          <p>MARSOC DESCRIPTION</p>
        </div>
        </div>
        <div style={group}>
        <Image src="pjlogo.png" thumbnail style={{width:150, height:140}}/>
        <div style={imageText}>
          <h1>Pararescue Specialist (PJ)</h1>
          <p>This is PJ Description</p>
        </div>
        </div>
        <div style={group}>
        <Image src="tacplogo.png" thumbnail style={{width:150, height:140}}/>
        <div style={imageText}>
          <h1>Tactical Air Control Party Specialist (TACP)</h1>
          <p>This is TACP Description</p>
        </div>
        </div>
        <div style={group}>
        <Image src="cctlogo.png" thumbnail style={{width:150, height:140}}/>
        <div style={imageText}>
          <h1>Combat Controller Specialist (CCT)</h1>
          <p>This is CCT Description</p>
        </div>
        </div>
        </div>

    )

}

export default InfoPage;

{/* <Form>
        <h4 style={{color:'white'}}>User Info</h4>
        <Row>
        <Image src="seallogo.png" thumbnail style={{width:150, height:140}}/>
        <Form.Label controlId = "floatingName" label="Name" >
          <Form.Control type ="text" placeholder="First Name" style={{marginBottom: '5%'}} />
          </Form.Label>
        </Row>
        <Row>
          <Form.Label controlId = "floatingName" label="Name" >
          <Form.Control type ="text" placeholder="First Name" style={{marginBottom: '5%'}} />
          </Form.Label>
        </Row>
        </Form> */}