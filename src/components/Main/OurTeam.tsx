import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  { name: "Dr. David Muguku", role: "Co-Founder - CEO", photo: "/path/to/david-photo.jpg", description: "" },
  { name: "Viral Shah", role: "Co-Founder - CTO", photo: "/path/to/viral-photo.jpg", description: "" },
  { name: "Glen Ayienda", role: "Full Stack Engineer", photo: "/path/to/glen-photo.jpg", description: "" },
  { name: "Tracy Wankio", role: "Full Stack Developer", photo: "https://serenity-gallery.s3.amazonaws.com/web_images/Screenshot+2024-01-15+141121.png", description: "" },
  { name: "Christopher Ndugo", role: "Role", photo: "/path/to/christopher-photo.jpg", description: "" },
  { name: "Brenda Kosgei", role: "Legal & Compliance", photo: "/path/to/brenda-photo.jpg", description: "" },
  { name: "Purity Githigia", role: "Finance", photo: "/path/to/purity-photo.jpg", description: "" },
];

const OurTeam: React.FC = () => {
  return (
    <div className="bg-[rgb(26,26,26)] text-white py-16 px-4 md:px-10 lg:px-40">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[#363636] rounded-xl p-6 text-center">
            <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-sm mb-2 text-gray-300">{member.role}</p>
            <p className="text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;