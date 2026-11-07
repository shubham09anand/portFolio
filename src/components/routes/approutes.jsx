import { Routes, Route } from 'react-router-dom'
import Projects from '../Projects'
import Technology from '../Technology'
import SocialNest from '../Project/SocialNest';
import QRMS from '../Project/QRMS';
import BlogManagement from '../Project/BlogManagement';
import PdfCollabrator from '../Project/PdfCollabrator';
import QrCode from '../Project/QrCode';
import About from '../About';

const AppRoutes = ({textcolor}) => {
     return (
          <Routes>
               <Route path="/" element={<About />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/technologies" element={<Technology props={textcolor} />} />
               <Route path="/projects/SocialNest" element={<SocialNest />} />
               <Route path="/projects/QRMS" element={<QRMS />} />
               <Route path="/projects/blogmanagment" element={<BlogManagement />} />
               <Route path="/projects/PdfCollabrator" element={<PdfCollabrator />} />
               <Route path="/projects/QrCode" element={<QrCode />} />
          </Routes>
     )
}

export default AppRoutes