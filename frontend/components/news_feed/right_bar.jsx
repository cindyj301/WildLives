import React from 'react'

const RightBar = () => {
    return (
        <div className="right-bar-container">
            <h3>Sponspored</h3>
            <ul className="right-bar-list">
                <a href="https://www.worldwildlife.org/species/directory?sort=extinction_status&direction=desc" target="_blank" rel="noopener noreferrer" className="right-bar-list-item first">
                    <img src={wwf} alt="world wild life fund logo" />
                    World Wildlife Fund
                </a>
                <a href="https://www.iucnredlist.org/" target="_blank" rel="noopener noreferrer" className="right-bar-list-item">
                    <img src={iucn} alt="iucn red list logo" />
                    IUCN Red List of Threatened Species
                </a>
            </ul>
        </div>
    )
}

export default RightBar
