import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  { name: "Dr. David Muguku", role: "Co-Founder - CEO", photo: "https://serenity-gallery.s3.us-east-1.amazonaws.com/David.jpg", description: "" },
  { name: "Viral Shah", role: "Co-Founder - CTO", photo: "https://serenity-gallery.s3.us-east-1.amazonaws.com/Viral2.jpg", description: "" },
  { name: "Glen Ayienda", role: "Full Stack Engineer", photo: "https://serenity-gallery.s3.us-east-1.amazonaws.com/web_images/glencrop.jpg", description: "" },
  { name: "Tracy Wankio", role: "Full Stack Developer", photo: "https://serenity-gallery.s3.amazonaws.com/web_images/Screenshot+2024-01-15+141121.png", description: "" },
  { name: "Christopher Ndugo", role: "Software Engineer", photo: "https://serenity-gallery.s3.amazonaws.com/web_images/Christopher_im.png", description: "" },
  { name: "Brenda Kosgei", role: "Legal & Compliance", photo: "https://serenity-gallery.s3.us-east-1.amazonaws.com/Brenda.jpeg", description: "" },
  { name: "Purity Githigia", role: "Finance", photo: "https://serenity-gallery.s3.us-east-1.amazonaws.com/purity.jpeg", description: "" }
];

const OurTeam: React.FC = () => {
  // Split the team members into three rows
  const firstRow = teamMembers.slice(0, 2);    // First 2 members
  const secondRow = teamMembers.slice(2, 5);   // Next 3 members
  const thirdRow = teamMembers.slice(5, 7);    // Last 2 members

  const TeamMemberCard = ({ member }: { member: TeamMember }) => (
    <div className="bg-[#363636] rounded-xl p-6 text-center w-full max-w-sm">
      <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-sm mb-2 text-gray-300">{member.role}</p>
      <p className="text-sm">{member.description}</p>
    </div>
  );

  return (
    <div className="bg-[rgb(26,26,26)] text-white py-16 px-4 md:px-10 lg:px-40">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Team</h2>
      
      {/* First row - 2 members */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {firstRow.map((member, index) => (
          <TeamMemberCard key={`first-${index}`} member={member} />
        ))}
      </div>

      {/* Second row - 3 members */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {secondRow.map((member, index) => (
          <TeamMemberCard key={`second-${index}`} member={member} />
        ))}
      </div>

      {/* Third row - 2 members */}
      <div className="flex justify-center gap-4 flex-wrap">
        {thirdRow.map((member, index) => (
          <TeamMemberCard key={`third-${index}`} member={member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;