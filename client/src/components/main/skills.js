import {SkillSet} from "../../utils/SkillSet"

export const Skills = () => {

    const skills = require("../../utils/skillInfo.json").data
    
    return (
        <section className="skills__section section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My technical level</span>
                <div className="skill__container container grid">
                    {skills.map(d => {
                       return <SkillSet mainInfo={d.mainInfo} tools={d.tools} key={d.mainInfo.title}/>
                    })}
                </div>
            </section>
    )
}