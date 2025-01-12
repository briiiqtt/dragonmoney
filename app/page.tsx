'use client'
import React, { useEffect, useState } from 'react';
import json from '../public/salary.json';

// 데이터 타입 정의
interface DataRow {
  연봉: string;
  실수령액: string;
  공제액계: string;
  국민연금: string;
  건강보험: string;
  장기요양: string;
  고용보험: string;
  소득세: string;
  지방소득세: string;
}

const Table: React.FC = () => {
  const [data, setData] = useState<DataRow[]>([]);

  useEffect(() => {
    hi();
  }, []);

  const hi = async () => {
    try {
        // const data = await fetch('/salary.json');
        // const json = await data.json();
        setData(json);
    } catch (error) {
        console.error(error);
    }
    
  }

  return (
    <div>
      <h1>연봉 데이터</h1>
      <table>
        <thead>
          <tr>
            <th>연봉</th>
            <th>실수령액</th>
            <th>공제액계</th>
            <th>국민연금</th>
            <th>건강보험</th>
            <th>장기요양</th>
            <th>고용보험</th>
            <th>소득세</th>
            <th>지방소득세</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.연봉}</td>
              <td>{row.실수령액}</td>
              <td>{row.공제액계}</td>
              <td>{row.국민연금}</td>
              <td>{row.건강보험}</td>
              <td>{row.장기요양}</td>
              <td>{row.고용보험}</td>
              <td>{row.소득세}</td>
              <td>{row.지방소득세}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
