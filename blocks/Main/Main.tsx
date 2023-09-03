import MainController from './MainController'
import '../../src/App.css'
const data: {
    label: string
    value: string
}[] = [
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
        label: 'Mother tongue',
        value: 'Tamil'
    },
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
    {
        label: "Native",
        value: "Chennai - Avadi"
    },
    {
        label: "Place of birth",
        value: "Chennai - Chetpet"
    },
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
    {
        label: 'Blood Group',
        value: 'O+(positive)'
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
        <div>
            {data.map((item) => this.renderBioDataItem(item))}
        </div>
      </div>
    )
  }
}
