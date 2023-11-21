
import { Card } from 'semantic-ui-react'


const items = [
  {
    href: "#card-example-link-card",
    header: '',
    description:
      '',
    meta: '',
  },
  {
    href: "#card-example-link-card",
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    href: "#card-example-link-card",
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    href: "#card-example-link-card",
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
 
]

const CardExampleGroupCentered = () => <Card.Group centered items={items} />

export default CardExampleGroupCentered