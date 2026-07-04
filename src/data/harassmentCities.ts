export interface HarassmentCity {
  name: string;
  slug: string;
  highCourt: string;
  policeAuthority: string;
  type: 'City' | 'Union Territory';
}

export const harassmentCities: HarassmentCity[] = [
  // Union Territories
  { name: 'Andaman and Nicobar Islands', slug: 'andaman-and-nicobar-islands', highCourt: 'Calcutta High Court (Port Blair Bench)', policeAuthority: 'Andaman & Nicobar Police Cyber Cell', type: 'Union Territory' },
  { name: 'Chandigarh', slug: 'chandigarh', highCourt: 'Punjab and Haryana High Court', policeAuthority: 'Chandigarh Police Cyber Crime Investigation Cell', type: 'Union Territory' },
  { name: 'Dadra and Nagar Haveli and Daman and Diu', slug: 'dadra-and-nagar-haveli-and-daman-and-diu', highCourt: 'Bombay High Court', policeAuthority: 'DNH & DD Cyber Crime Cell', type: 'Union Territory' },
  { name: 'Delhi', slug: 'delhi', highCourt: 'Delhi High Court', policeAuthority: 'Delhi Police Cyber Crime Cell', type: 'Union Territory' },
  { name: 'Jammu and Kashmir', slug: 'jammu-and-kashmir', highCourt: 'High Court of Jammu & Kashmir and Ladakh', policeAuthority: 'J&K Cyber Police', type: 'Union Territory' },
  { name: 'Ladakh', slug: 'ladakh', highCourt: 'High Court of Jammu & Kashmir and Ladakh', policeAuthority: 'Ladakh Police Cyber Cell', type: 'Union Territory' },
  { name: 'Lakshadweep', slug: 'lakshadweep', highCourt: 'Kerala High Court', policeAuthority: 'Lakshadweep Police', type: 'Union Territory' },
  { name: 'Puducherry', slug: 'puducherry', highCourt: 'Madras High Court', policeAuthority: 'Puducherry Cyber Crime Police Station', type: 'Union Territory' },
  
  // Major Cities
  { name: 'Mumbai', slug: 'mumbai', highCourt: 'Bombay High Court', policeAuthority: 'Mumbai Cyber Police', type: 'City' },
  { name: 'Pune', slug: 'pune', highCourt: 'Bombay High Court', policeAuthority: 'Pune Cyber Crime Cell', type: 'City' },
  { name: 'Nagpur', slug: 'nagpur', highCourt: 'Bombay High Court (Nagpur Bench)', policeAuthority: 'Nagpur Cyber Cell', type: 'City' },
  { name: 'Bengaluru', slug: 'bengaluru', highCourt: 'Karnataka High Court', policeAuthority: 'Bengaluru CCB Cyber Crime Police', type: 'City' },
  { name: 'Mysuru', slug: 'mysuru', highCourt: 'Karnataka High Court', policeAuthority: 'Mysuru Cyber Crime Station', type: 'City' },
  { name: 'Chennai', slug: 'chennai', highCourt: 'Madras High Court', policeAuthority: 'Chennai City Cyber Crime Branch', type: 'City' },
  { name: 'Coimbatore', slug: 'coimbatore', highCourt: 'Madras High Court', policeAuthority: 'Coimbatore City Police Cyber Cell', type: 'City' },
  { name: 'Hyderabad', slug: 'hyderabad', highCourt: 'Telangana High Court', policeAuthority: 'Hyderabad Cyber Crimes Station', type: 'City' },
  { name: 'Kolkata', slug: 'kolkata', highCourt: 'Calcutta High Court', policeAuthority: 'Kolkata Police Cyber Crime Cell', type: 'City' },
  { name: 'Ahmedabad', slug: 'ahmedabad', highCourt: 'Gujarat High Court', policeAuthority: 'Ahmedabad Cyber Crime Branch', type: 'City' },
  { name: 'Surat', slug: 'surat', highCourt: 'Gujarat High Court', policeAuthority: 'Surat Cyber Crime Cell', type: 'City' },
  { name: 'Vadodara', slug: 'vadodara', highCourt: 'Gujarat High Court', policeAuthority: 'Vadodara Cyber Cell', type: 'City' },
  { name: 'Gurugram', slug: 'gurugram', highCourt: 'Punjab and Haryana High Court', policeAuthority: 'Gurugram Cyber Crime Police Station', type: 'City' },
  { name: 'Faridabad', slug: 'faridabad', highCourt: 'Punjab and Haryana High Court', policeAuthority: 'Faridabad Cyber Cell', type: 'City' },
  { name: 'Noida', slug: 'noida', highCourt: 'Allahabad High Court', policeAuthority: 'Noida Cyber Crime Police Station', type: 'City' },
  { name: 'Lucknow', slug: 'lucknow', highCourt: 'Allahabad High Court (Lucknow Bench)', policeAuthority: 'Lucknow Cyber Cell', type: 'City' },
  { name: 'Kanpur', slug: 'kanpur', highCourt: 'Allahabad High Court', policeAuthority: 'Kanpur Cyber Crime Branch', type: 'City' },
  { name: 'Varanasi', slug: 'varanasi', highCourt: 'Allahabad High Court', policeAuthority: 'Varanasi Cyber Cell', type: 'City' },
  { name: 'Jaipur', slug: 'jaipur', highCourt: 'Rajasthan High Court (Jaipur Bench)', policeAuthority: 'Jaipur Cyber Crime Police Station', type: 'City' },
  { name: 'Jodhpur', slug: 'jodhpur', highCourt: 'Rajasthan High Court', policeAuthority: 'Jodhpur Cyber Cell', type: 'City' },
  { name: 'Thiruvananthapuram', slug: 'thiruvananthapuram', highCourt: 'Kerala High Court', policeAuthority: 'Thiruvananthapuram Cyber Cell', type: 'City' },
  { name: 'Kochi', slug: 'kochi', highCourt: 'Kerala High Court', policeAuthority: 'Kochi Cyber Cell', type: 'City' },
  { name: 'Bhopal', slug: 'bhopal', highCourt: 'Madhya Pradesh High Court', policeAuthority: 'Bhopal Cyber Cell', type: 'City' },
  { name: 'Indore', slug: 'indore', highCourt: 'Madhya Pradesh High Court (Indore Bench)', policeAuthority: 'Indore Cyber Crime Branch', type: 'City' },
  { name: 'Patna', slug: 'patna', highCourt: 'Patna High Court', policeAuthority: 'Patna Cyber Cell', type: 'City' },
  { name: 'Bhubaneswar', slug: 'bhubaneswar', highCourt: 'Orissa High Court', policeAuthority: 'Bhubaneswar Cyber Police', type: 'City' },
  { name: 'Visakhapatnam', slug: 'visakhapatnam', highCourt: 'Andhra Pradesh High Court', policeAuthority: 'Visakhapatnam Cyber Crime Police', type: 'City' },
  { name: 'Vijayawada', slug: 'vijayawada', highCourt: 'Andhra Pradesh High Court', policeAuthority: 'Vijayawada Cyber Crime Station', type: 'City' },
  { name: 'Guwahati', slug: 'guwahati', highCourt: 'Gauhati High Court', policeAuthority: 'Guwahati City Cyber Crime Station', type: 'City' },
  { name: 'Ranchi', slug: 'ranchi', highCourt: 'Jharkhand High Court', policeAuthority: 'Ranchi Cyber Cell', type: 'City' },
  { name: 'Raipur', slug: 'raipur', highCourt: 'Chhattisgarh High Court', policeAuthority: 'Raipur Cyber Crime Police', type: 'City' },
  { name: 'Dehradun', slug: 'dehradun', highCourt: 'Uttarakhand High Court', policeAuthority: 'Dehradun Cyber Crime Police Station', type: 'City' },
  { name: 'Shimla', slug: 'shimla', highCourt: 'Himachal Pradesh High Court', policeAuthority: 'Shimla Cyber Cell', type: 'City' }
];
