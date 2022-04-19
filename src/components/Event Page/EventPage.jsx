import Celebration from '../../image/celebration.svg'
import { AiOutlineClose } from 'react-icons/ai'

const EventPage = ({event}) => {
    //dummy data
    const e = {
        id: 0,
        title: `Random Event`,
        date: '00/00/0000',
        time: '00:00',
        guests: [{name: 'John', items:['Avocado', 'forks']}, {name: 'Dylan', items: ['banana', 'something random']}],
        items: ['cups', 'plates', 'doughnuts'],
        description: `Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ip has been the industry's standard dummy text ever since the 1500s`
    }

    const dummyDate = ['Nachos', 'item', 'Cats']
    return <div>
        <img className='mx-auto' src={Celebration} alt='celebration'/>
        <div className='text-center'>
            <p>{event.title}</p>
            <p>{event.date}</p>
            <p>{event.time}</p>
            <p>Location</p>
        </div>
        <div>
            <p>My Items: </p>
            <div>User: 
                <select>
                    <option value='' selected disabled hidden>Add an Item</option>
                    {
                        event.items.map((item, index) => {
                            return <option key={index} > 
                                {item}
                            </option>
                        })
                    }
                </select>
                <div className='flex justify-center mt-4'>
                    {
                        dummyDate.map((item, index) => {
                            return <div key={index} className='bg-gray-400 rounded-xl pl-2 pr-5 py-2 mx-1 relative'>
                                    {item}
                                    <AiOutlineClose size={12} className='absolute top-1 right-0.5 mr-0.5' />
                                </div>
                        })
                    }
                </div>
                <div>
                    <p>Guests:</p>
                    {
                        event.guests.map((guest, index) => {
                            return <div className='text-left ml-4' key={index}>{`${guest.name}:  ${guest.items.join(', ')}`}</div>
                        })
                    }
                </div>
            </div>

        </div>
    </div>
}

export default EventPage