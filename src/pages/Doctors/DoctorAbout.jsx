import React from 'react';
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          <span className='text-irisColor font-bold text-[24px] leading-9'>
            Dr.Kais 
          </span>
        </h3>
        <p className='text-para'>
          Dr. Kais Kabechi is a highly esteemed surgeon with over 10 years of experience in the medical field. He has performed more than 2000 successful surgeries, ranging from complex cardiac procedures to intricate neurological operations. Dr. Kabechi is renowned for his exceptional precision and surgical skills, which have contributed to saving countless lives. His meticulous approach and outstanding proficiency have earned him a reputation as one of the best in the field.

          Throughout his career, Dr. Kais Kabechi has been dedicated to staying at the forefront of medical advancements, continuously enhancing his expertise through ongoing education and training. Whether a patient has degenerative spine disease, an athlete incurs an ACL tear or sports injury while competing, a patient needs a hip or knee replacement, or a victim is injured in an event and needs trauma care.

          Dr. Kais Kabechi's extensive experience and dedication to his craft make him a trusted and highly sought-after surgeon, known for his life-saving interventions and his contributions to the advancement of surgical practices.
        </p>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Education
        </h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formateDate("09-09-2006")} - {formateDate("12-06-2012")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                PhD in Surgery
              </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              Faculty of Science, Tunis
            </p>
          </li>

          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formateDate("12-06-2012")} - {formateDate("01-07-2013")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                PhD in Surgery
              </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              Clinic La Rose, Tunis 1053
            </p>
          </li>
        </ul>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formateDate("07-10-2013")} - {formateDate("07-07-2015")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              Sr. Surgeon
            </p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              2 years of practice at Clinic La Rose, Tunis 1053
            </p>
          </li>

          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formateDate("07-10-2015")} - {formateDate("07-07-2024")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              Sr. Surgeon
            </p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              Full-time surgeon at Clinic La Rose, Tunis 1053
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DoctorAbout;
