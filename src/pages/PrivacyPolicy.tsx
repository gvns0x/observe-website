import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../components/Wrapper/Wrapper'

const PrivacyItem = styled.div`
    display:inline-flex;
    flex-direction:column;
    text-align:left;
    gap: 0px;
    width:100%;
`

const Button = styled.button`
    padding: 8px 12px;
    display:flex;
    width:fit-content;
    border: none;
    background-color:rgba(0,0,0,.04);
    font-size: 14px;
    border-radius: 6px;
    cursor:pointer;
    transition: .1s ease-in;

    &:hover {
        background-color:rgba(0,0,0,.07);
        transition: .2s ease-in;
    }
`

const privacyItems = [
    {
        title: 'Summary',
        paragraphs: [
            'observe is designed to work on your device. We do not create accounts, do not sell data, and do not use advertising or analytics SDKs.',
        ],
    },
    {
        title: 'Information the App stores on your device',
        paragraphs: [
            'The App may store the following locally on your Apple Watch:',
            'This information stays on your device (and, where applicable, in the App’s App Group used by the widget). It is not uploaded to our servers. The App does not require a network connection for its core features.',
        ],
        list: [
            'Meditation session history (start and end times, and phase durations for Breath, Body, and Gratitude), used to show your practice activity graph',
            'Temporary session state shared with the observe Smart Stack / accessory widget so it can show your current phase and countdown during an active session',
            'Local notifications / haptic cues used to mark phase transitions during a session',
        ],
    },
    {
        title: 'Information we do not collect',
        paragraphs: [
            'We do not collect, transmit, or store on our own systems:',
        ],
        list: [
            'Name, email, or other contact information',
            'Account or login credentials (there is no account system)',
            'Location, Health, contacts, photos, or microphone data',
            'Advertising identifiers or tracking data',
            'Analytics, crash, or usage telemetry sent to us',
        ],
    },
    {
        title: 'How your information is used',
        paragraphs: [
            'On-device session data is used only to:',
        ],
        list: [
            'Run your meditation sessions',
            'Show phase timing in the widget during a live session',
            'Display your local practice history in the App',
        ],
    },
    {
        title: 'Sharing',
        paragraphs: [
            'We do not sell, rent, or share personal information with third parties, because we do not collect personal information from the App onto our systems.',
        ],
    },
    {
        title: 'Children’s privacy',
        paragraphs: [
            'The App does not knowingly collect personal information from children. Because we do not collect personal data onto our systems, there is nothing for us to delete from our servers related to a child’s use of the App. Session history can be removed by deleting the App (or clearing app data) on the device.',
        ],
    },
    {
        title: 'Data retention and deletion',
        paragraphs: [
            'Session history remains on your device until you delete it by removing the App or otherwise clearing the App’s local data. We do not retain a copy of that data.',
        ],
    },
    {
        title: 'Changes to this policy',
        paragraphs: [
            'We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the App after an update means you accept the revised policy.',
        ],
    },
    {
        title: 'Contact',
        paragraphs: [
            'If you have questions about this Privacy Policy or the App, contact:'
        ],
        list: [
            'gvns0x@gmail.com',
            'x.com/gvns0x',
        ]
    },
]

function PrivacyPolicy() {

    const navigate = useNavigate()

    return (
            <Wrapper>
            <Button onClick={() => navigate("/")}>Home</Button>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "left" }}>
                    <h1>Privacy Policy</h1>
                    <h5>Observe</h5>
                </div>
                {privacyItems.map(({ title, paragraphs, list }) => (
                    <PrivacyItem key={title}>
                        <h3>{title}</h3>
                        <p>{paragraphs[0]}</p>
                        {list && (
                            <ul>
                                {list.map((entry) => (
                                    <li key={entry}>{entry}</li>
                                ))}
                            </ul>
                        )}
                        {paragraphs.slice(1).map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </PrivacyItem>
                ))}
            </Wrapper>
    )
}

export default PrivacyPolicy
