import MainController from './MainController'
import '../../src/App.css'

const personalData = [
    {
        label: "Name",
        value: "Vishnu Vardhan"
    },
    {
        label: "Age",
        value: "24"
    },
    {
        label: "Gender",
        value: "Male"
    },
    {
        label: "Date of birth",
        value: "07|08|1999"
    },
    {
        label: "Height",
        value: "172 cm"
    },
    {
        label: 'Weight',
        value: '52 kg'
    },
    {
        label: 'Marital status',
        value: 'Single'
    },
    {
        label: 'Blood Group',
        value: 'O+(positive)'
    },
]

const careerData = [
    {
        label: 'Diploma',
        value: 'Mechatronics(DMX)'
    },
    {
        label: "Under graduate",
        value: 'B.E(ECE)'
    },
    {
        label: 'Employed in',
        value: 'Agiledock'
    },
    {
        label: 'Annual Income',
        value: '4.5 lakhs'
    },
]

const familyData = [
    {
        label: "Parent name",
        value: "Malar Vizhi"
    },
    {
        label: 'Brother name',
        value: 'Karthikeyan'
    },
    {
        label: "Sister-in-law name",
        value: "Priyanka K"
    },
    {
        label: "Nephew name",
        value: "Mithran"
    },
    {
        label: 'Mother occupation',
        value: 'Retired(Govt school teacher)'
    },
]

const locationAndContactData = [

    {
        label: "Native",
        value: "Chennai - Avadi"
    },
    {
        label: "Place of birth",
        value: "Chennai - Chetpet"
    },

    {
        label: 'Contact(Malar Vizhi)',
        value: '+91 8428409593'
    },
    {
        label: 'Contact(Vishnu Vardhan)',
        value: '+91 8072673940'
    },
    {
        label: 'Address',
        value: '74/2, 4th main road, Annamalai nagar, Avadi, Chennai - 600054'
    },
]
const religiousData = [
    {
        label: 'Religion',
        value: 'Hindu'
    },
    {
        label: 'Gothram',
        value: 'Vishnu Gothram'
    },
    {
        label: 'Chevvai dhosam',
        value: 'NO'
    },
    {
        label: 'Rasi',
        value: 'Rishabam'
    },
    {
        label: 'Laknam',
        value: 'Simmam'
    },
    {
        label: 'Star',
        value: 'Rohini'
    },
    {
        label: 'Birth time',
        value: '8:00 AM'
    },
    {
        label: 'Birth day',
        value: 'Saturday'
    },
    {
        label: 'Religion',
        value: 'Hindu'
    },
    {
        label: 'Caste',
        value: 'Mudaliyar (Arcot/Thuluva vellalar)'
    },
    {
        label: 'Mother tongue',
        value: 'Tamil'
    },
]

const chakraTableData = [
    {
        "1": '',
        "2": 'குரு சனி',
        "3": 'சந்திரன்',
        "4": '',
        "5": 'ராகு சூரியன் பூதன்',
        "6": 'லக்னம் சுக்ரன் மா',
        "7": '',
        "8": 'செவ்வாய்',
        "9": '',
        "10": '',
        "11": 'கேது',
        "12": '',
        "13": 'ராசி',
    },
    {
        "1": '',
        "2": 'செவ்வாய் மா',
        "3": '',
        "4": 'கேது',
        "5": 'சந்திரன் குரு',
        "6": 'பூதன் சனி',
        "7": 'லக்னம் சுக்ரன்',
        "8": '',
        "9": '',
        "10": 'ராகு',
        "11": 'சூரியன்',
        "12": '',
        "13": 'நவாம்சம்',
    },
]

export default class Main extends MainController {

  renderBioDataItem = (data: {
    label: string,
    value: string
  }) => {
    return (
        <div className='renderBioDataItemContainer'>
            <div className='renderBioDataItemChildOne'>
                <span>{data.label}</span>
            </div>
            <div className='renderBioDataItemChildTwo'>
                <span>{data.value}</span>
            </div>
        </div>
    )
  }

  renderPara = (item: string) => {
    return (
        <p style={{
            textAlign: 'center',
            textDecoration: item === "லக்னம்" ? "underline" : undefined
        }}>{item}</p>
    )
  }
  
  splitBySpace(string: string) {
    const str = string.split(' ')

    if(str.length == 0) {
        return string
    }
    else {
        return str.map((item) => this.renderPara(item))
    }
  }

  renderChakraTable = (item: {[key: string]: string}) => {
    return (
        <div className='center col' style={{
            paddingTop: '30px',
            paddingBottom: '30px'
        }}>
            <div className='' style={{
                flexDirection: 'row',
                display: 'flex'
            }}>
                <div className='box center'>
                    <span>{this.splitBySpace(item['1'])}</span>
                </div>
                <div className='box center'>
                    <span>{this.splitBySpace(item['2'])}</span>
                </div>
                <div className='box center'>
                    <span>{this.splitBySpace(item['3'])}</span>
                </div>
                <div className='box center'>
                    <span>{this.splitBySpace(item['4'])}</span>
                </div>
            </div>
            <div style={{
                flexDirection: 'row',
                display: 'flex'
            }}>
                <div>
                    <div className='box center'>
                        <span>{this.splitBySpace(item['12'])}</span>
                    </div>
                    <div className='box center'>
                        <span>{this.splitBySpace(item['11'])}</span>
                    </div>
                </div>
                <div style={{
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '120px',
                        height: '120px',
                        backgroundColor: 'white',
                        border: '1px black solid' 
                    }}>
                        {item['13']}
                    </div>
                </div>
                <div>
                    <div className='box center'>
                        <span>{this.splitBySpace(item['5'])}</span>
                    </div>
                    <div className='box center'>
                        <span>{this.splitBySpace(item['6'])}</span>
                    </div>
                </div>
            </div>
            <div className='' style={{
                flexDirection: 'row',
                display: 'flex'
            }}>
                <div className='box center'>
                    <span>{this.splitBySpace(item['10'])}</span>
                </div>
                <div className='box center'>
                    <span>{this.splitBySpace(item['9'])}</span>
                </div>
                <div className='box center'>
                    <span>{this.splitBySpace(item['8'])}</span>
                </div>
                <div className='box center'>
                    <span>{this.splitBySpace(item['7'])}</span>
                </div>
            </div>
        </div>
    )
  }

  render() {
    return (
      <div>
        <div>
            <h3>About myself</h3>
        </div>
        <div>
            <p>Hi, I'm vishnu, who loves to play a variety of sports like football cricket and badmintan etc.,</p>
            <p>Apart from that i am currently working as React Native Developer(Software Engineer) @Agiledock.</p>
            <p>When it comes to my family i have my mom, brother and sister-in-law and cute little nephew.</p>
            <p>Here goes my bio data....</p>
        </div>
        <div style={{
            margin: '20px'
        }}>
            <div>
                <h3>Personal Details</h3>
                {personalData.map((item) => this.renderBioDataItem(item))}
            </div>
            <div>
                <h3>Career Details</h3>
                {careerData.map((item) => this.renderBioDataItem(item))}
            </div>
            <div>
                <h3>Family Details</h3>
                {familyData.map((item) => this.renderBioDataItem(item))}
            </div>
            <div>
                <h3>Location & Contact Details</h3>
                {locationAndContactData.map((item) => this.renderBioDataItem(item))}
            </div>
            <div>
                <h3>Religious Details</h3>
                {religiousData.map((item) => this.renderBioDataItem(item))}
            </div>
            {/* {data.map((item) => this.renderBioDataItem(item))} */}
        </div>
        <div className='mobile-grid'>
            {chakraTableData.map((item) => this.renderChakraTable(item))}
        </div>
      </div>
    )
  }
}
