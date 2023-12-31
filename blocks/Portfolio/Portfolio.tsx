import { Component } from 'react'
import image from "../../public/vishnu.jpg"
import locationSvg from '../../public/location.svg'
export default class Portfolio extends Component {

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
                            backgroundColor: '#ffffff',
                            border: '1px #ffffff solid' 
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

      renderBioDataItem = (data: {
        label: string,
        value: string
        isAddress?: boolean
      }) => {
        return (
            <div className='renderBioDataItemContainer'>
                <div className='renderBioDataItemChildOne'>
                    <span>{data.label}</span>
                </div>
                <div className='renderBioDataItemChildTwo'>
                    {data.isAddress ? (
                        <a style={{
                            textDecoration: 'none'
                        }} href="https://www.google.com/maps/dir/13.110173,80.1093562/Rockhunters+Project+Makers,+No.74,+4th+Main+Rd,+Anna+Nagar,+Annamalai+Nagar,+Avadi,+Tamil+Nadu+600054,+India/@13.1130181,80.1088163,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a52626387ba8159:0x71210177a1fd28c!2m2!1d80.1126572!2d13.1161262?entry=ttu">
                            <img src={locationSvg} alt="SVG" style={{
                                marginRight: 10
                        }}/><span>{data.value}</span>
                        </a>
                ) : <span>{data.value}</span>}
                </div>
            </div>
        )
      }
  render() {
    return (
        <div className='portfolioContainer'>
            <div className='leftContainer'>
                <img className='leftImage' src={image} alt="profile" />          
            </div>
            <div className='leftContent'>
                <div style={{ marginTop: 30}}>
                    <h1 style={{
                        fontWeight: 'bolder',
                        fontSize: 46,
                        color: '#000000',
                        textAlign: 'center',
                    }}>Vishnu Vardhan</h1>
                </div>
                <div>
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        textAlign: 'center',
                        color: '#000000ff',
                    }}>SOFTWARE ENGINEER</p>
                </div>
                <div style={styles.Card}>
                    <p style={styles.ItemHeading}>Personal Details</p>
                    {personalData.map((item) => this.renderBioDataItem(item))}
                </div>
                <div style={styles.Card}>
                    <p style={styles.ItemHeading}>Career Details</p>
                    {careerData.map((item) => this.renderBioDataItem(item))}
                </div>
                <div style={styles.Card}>
                    <p style={styles.ItemHeading}>Family Details</p>
                    {familyData.map((item) => this.renderBioDataItem(item))}
                </div>
                <div style={styles.Card}>
                    <p style={styles.ItemHeading}>Location & Contact Details</p>
                    {locationAndContactData.map((item) => this.renderBioDataItem(item))}
                </div>
                <div style={styles.Card}>
                    <p style={styles.ItemHeading}>Religious Details</p>
                    {religiousData.map((item) => this.renderBioDataItem(item))}
                </div>
                <div style={styles.Card} className='mobile-grid'>
                        {chakraTableData.map((item) => this.renderChakraTable(item))}
                </div>
                <div>
                    <p>Designed & Coded by <a href="https://github.com/VVNTHEFLASH">
                        @VVNTHEFLASH</a></p>
                </div>
            </div> 
        </div>
    )
  }
}

const styles: {[key: string]: React.CSSProperties} = {
    ItemHeading: {
        fontSize: 24,
        fontWeight: 'bolder',
        color: '#000000',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 20,
        marginTop: 20,
    },
    Card: {
        borderRadius: 15,
        margin: 10,
        padding: 10,
        boxShadow: '0px 0px 3px #ffffff',
        backgroundColor: '#ffffffff'
    }
}

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
        label: "Mother",
        value: "Malar Vizhi"
    },
    {
        label: 'Mother occupation',
        value: 'Retired(Govt school teacher)'
    },
    {
        label: 'Brother',
        value: 'Karthi Keyan S'
    },
    {
        label: "Sister-in-law",
        value: "Priyanka K"
    },
    {
        label: "Nephew",
        value: "Mithran K"
    },
    {
        label: "Father",
        value: "Sundara ganesan"
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
        value: '74/2, 4th main road, Annamalai nagar, Avadi, Chennai - 600054',
        isAddress: true
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
