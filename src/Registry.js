import './Registry.css'

function Registry() {
  return (
    <div className="Registry">
      <div className="registry-wrapper">
        <h1>A Non-Traditional Registry</h1>
        <div>After over 10 years together, we don't need a lot of traditional wedding registry items. Instead, we ask that you consider donating to some of the organizations that we have supported for many years. We support a combination of local and international charities and non-profits. Some focus on the needs of the local community, others tackle global problems. Some organizations tackle global issues by working on the local level with state governments.</div>
        <h3>Help the Local Communities We've Lived In:</h3>
        <ul className="registry-list">
          <li className="registry-list-item"><a href="https://www.feedwm.org/">Feeding America Western Michigan</a></li>
          <div className="registry-list-copy">A food bank organization that supports all of the Upper Peninsula of Michigan.</div>
          <li className="registry-list-item">Nature Conservency</li>
          <div className="registry-list-copy">The Nature Conservency has supported a number of nature preserves in the Keweenaw Peninsula. Their work helps keep the Copper Country green and beautiful.</div>
          <li className="registry-list-item">CEAP - Minneapolis</li>
          <div className="registry-list-copy">Community Emergency Assistance Program (CEAP) provides various types of support to the Twin Cities including food and housing assistance, and is a general hub for employment, financial, mental health and immigrant resources.</div>
          <li className="registry-list-item">Project Home - Philadelphia</li>
          <div className="registry-list-copy">Project Home provides housing, employment, medical and educational resources in the Philadelphia area.</div>
        </ul>
        <h3>Climate Change & International Non-Profits:</h3>
        <ul>
          <li className="registry-list-item">Vote Solar</li>
          <div className="registry-list-copy">Vote Solar is a non-profit policy advocacy organization that works with local governments to achieve green energy policies.</div>
          <li className="registry-list-item">Partners in Health</li>
          <div className="registry-list-copy">A healthy developing</div>
          <li className="registry-list-item">Heifer International</li>
          <div className="registry-list-copy">Give the gift of livestock.</div>
        </ul>
        <h3>Democracy & Social Justice:</h3>
        <ul className="registry-list">
          <li className="registry-list-item">Fair Vote</li>
          <div className="registry-list-copy">Ranked Choice Voting</div>
          <li className="registry-list-item">ACLU</li>
          <div className="registry-list-copy">The ACLU has been tackling the most important civil liberties issues for 100 years. No matter what your top issue is, they're fighting the good fight for you.</div>
        </ul>
      </div>
    </div>
  )
}

export default Registry
