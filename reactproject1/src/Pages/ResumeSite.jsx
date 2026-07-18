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
                        - Troubleshot electric meter connectivity, configuration and OT data
                    </p>
                    <p>
                        - Scripted Powershell code using WINRM code execution, Windows jobs, SQL/IIS integration and dynamic Powershell Object Arrays
                    </p>
                    <p>
                        - Built data pipelines in Powershell to move data from 30 SQL Servers to Databricks
                    </p>
                    <p>
                        - Troubleshot Application layer errors through IIS Sites and Applications Pools
                    </p>
                    <p>
                        - Produced Business Intelligence Reports in PowerBI and Databricks via SQL Query
                    </p>
                    <p>
                        - Planned AWS and Azure Migration: IAM, EC2, VPCs and RDS
                    </p>
                </section>
                <section className="resume-card">
                    <div className="job-header">
                        <span className="company-name">EPS Corporation</span>
                        <span className="job-date">January 2022 - September 2024</span>
                    </div>
                    <p>
                        - Utilized Ansible Playbooks, Jinja Templates, and Terraform to build RHEL8 VMs and apply Yum updates
                    </p>
                    <p>
                        - Scripted in Powershell to solve issues with Windows Software (AD, MECM, WSUS)
                    </p>
                    <p>
                        - Administered Linux systems on Redhat and Debian operating systems including ACAS servers
                    </p>
                    <p>
                        - Configured VLANs, trunks, CISCO/Palo Alto access control lists
                    </p>
                    <p>
                        - Applied PKI Certificates to systems, troubleshot system trust and CAC logon solutions
                    </p>
                    <p>
                        - Performed backups with Veeam and Rubrik 
                    </p>
                    <p>
                        - Built three systems at different Classifications from empty server to delivered
                    </p>
                    <p>
                        - Troubleshot laptop to radio communications with Multicast
                    </p>
                    <p>
                        - Worked with professionals in other fields to accomplish tasks within time constraints
                    </p>
                    <p>
                        - Monitored network performance using tools like SolarWinds and Wireshark, addressing any anomalies.
                    </p>
                </section>
                <section className="resume-card">
                    <div className="job-header">
                        <span className="company-name">Davidson Technologies</span>
                        <span className="job-date">October 2020 - January 2022</span>
                    </div>
                    <p>
                        - Applied STIGs to devices to maintain cyber security posture
                    </p>
                    <p>
                        - Provided remote support to ISSOs at multiple bases
                    </p>
                    <p>
                        - Requested PKI Certificates from DOD Cert authorities and maintained certificate repositories
                    </p>
                    <p>
                        - Configured RAID for server data storage
                    </p>
                    <p>
                        - Managed ACAS scan zones and plugins for Monitoring and Reporting team
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
                        <span className="company-name">AWS Certified Solutions Architect � Associate</span>
                        <span className="job-date">July 2025 - July 2028</span>
                    </div>
                </section>
            </main>
        </>
    )
}