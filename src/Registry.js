import './Registry.css';

function Registry() {
    return(
        <div className="Registry">
            <h1>Registry</h1>
            <p className="registry-text">Izaak and I have had 11 years together where we've slowly built up our possessions. We are also privileged to be in a place where most things that we need or want, we can go buy without a much thought. For that reason, in lieu of a traditional registry, we're asking folks to donate either to a non-profit of your choice or to one of the local non-profits we support in the U.P. - the Keweenaw Land Trust.</p>
            <h2>Keweenaw Land Trust</h2>
            <p className="registry-text">The Keweenaw Land Trust is a community partner protecting land, water, and quality of life through conservation, stewardship and education in the Keweenaw. They maintain a number of trails in the area that we enjoy hiking and do great work conserving the beauty of our neck of the woods.</p> 
            <p className="registry-text">Izaak started volunteering with the Land Trust in early 2021, providing them with IT support as they upgraded their systems to the cloud and has been active in supporting them ever since. We would love it if you'd consider making a donation by going to <a href="https://keweenawlandtrust.org" target="_blank">keweenawlandtrust.org</a></p>
            <h2>But what if I really want to give you something?</h2>
            <p className="registry-text">We understand some folks really want to bring a gift with them. In this case, the things we're most lacking in is outdoor/lawn care things. Before going out and buying anything, we'd ask that you look to see if you have extra items at your house that you don't have a need for that we could take off your hands.</p>
            <p className="registry-text">Some examples of things we don't have, but could use:</p>
            <div className="registry-list">
                <div className="registry-list-group">
                    <p className="registry-list-header">Garden Supplies</p>
                    <li>Garden hose</li>
                    <li>Hose nozzles</li>
                    <li>Hose connector pieces</li>
                    <li>Hose containers/wheels</li>
                    <li>Clippers</li>
                </div>
                <div className="registry-list-group">
                    <p className="registry-list-header">Tools</p>
                    <li>Rakes</li>
                    <li>Snow shovels - you can never have too many up here ;)</li>
                </div>
                <div className="registry-list-group">
                    <p className="registry-list-header">Outdoor furniture:</p>
                    <li>Fire pit</li>
                    <li>Grill</li>
                    <li>Table and chairs</li>
                    <li>Plant trellis</li>
                    <li>Bird feeders</li>
                    <li>Christmas lights</li>
                </div>
                <div className="registry-list-group">
                    <p className="registry-list-header">Plants:</p>
                    <li>Anything that's ready to split</li>
                    <li>Rhubarb</li>
                    <li>Raspberries</li>
                    <li>Hostas</li>
                    <li>Anything edible!</li>
                    <li>Native plants are great, too!</li>
                    <li>We'd also love a propagation of your house plants!</li>
                </div>
            </div>
            <div className="registry-list-full">
                <p className="registry-list-header-full">We are still trying to fill out our house with some furniture. If you're in a place in your life where you're looking to downsize your possessions, we should talk! Here are some furniture things we're on the hunt for now:</p>
                <li>Bedside tables</li>
                <li>Small desk</li>
                <li>Bookshelves</li>
                <li>Area rugs</li>
                <li>A small sleeper sofa</li>
                <li>Cool art!</li>
            </div>
        </div>
    )
}

export default Registry