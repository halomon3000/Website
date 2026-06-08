import './ResumeSite.css'
export function ResumeSite() {
    return (
        <>
            <main className="resume-main">
                <h1>Jobs</h1>
                <section className="resume-card">
                    <div className="job-header">
                        <span className="company-name">Peerless Technologies - Database Administrator</span>
                        <span className="job-date">September 2024 - Present</span>
                    </div>
                    <p>
                        Scripted data pipelines in powershell, 
                    </p>
                    <div className="job-header">
                        <span className="company-name">EPS Corporation</span>
                        <span className="job-date">January 2022 - September 2024</span>
                    </div>
                    <p>
                        Deployed VMs with Ansible, Secured system according to DISA guidelines and 
                    </p>
                    <div className="job-header">
                        <span className="company-name">Davidson Technologies</span>
                        <span className="job-date">October 2020 - January 2022</span>
                    </div>
                    <p>
                        Optimized local database storage and automated data scraping pipelines...
                    </p>
                </section>
                <h1>Education</h1>
                <section className="resume-card">
                    <div className="job-header">
                        <span className="company-name">University of West Florida</span>
                        <span className="job-date"> May 2018 - May 2020</span>
                    </div>
                    <p>
                        Bachelor of Science in Computer and Information Sciences
                    </p>
                    <div className="job-header">
                        <span className="company-name">University of West Florida</span>
                        <span className="job-date"> August 2016 - December 2017</span>
                    </div>
                    <p>
                        Began studying computer science and coding in C and C++.
                    </p>
                </section>
                <h1>Certification</h1>
                <section className="resume-card">
                    <div className="job-header">
                        <span className="company-name">CompTIA Security+ ce Certification</span>
                        <span className="job-date">August 2020 - November 2027</span>
                    </div>
                    <div className="job-header">
                        <span className="company-name">CompTIA Advanced Security Practitioner (CASP)</span>
                        <span className="job-date">November 2021 - November 2027</span>
                    </div>
                    <div className="job-header">
                        <span className="company-name">Red Hat Certified System Administrator (RHCSA)</span>
                        <span className="job-date">Janurary 2024 - January 2027</span>
                    </div>
                    <div className="job-header">
                        <span className="company-name">Red Hat Certified Engineer (RHCE)</span>
                        <span className="job-date">April 2024 - April 2027</span>
                    </div>
                    <div className="job-header">
                        <span className="company-name">Microsoft Certified: Azure Administrator Associate</span>
                        <span className="job-date">February 2025 - February 2027</span>
                    </div>
                    <div className="job-header">
                        <span className="company-name">AWS Certified Solutions Architect – Associate</span>
                        <span className="job-date">July 2025 - July 2028</span>
                    </div>
                </section>
            </main>
        </>
    )
}