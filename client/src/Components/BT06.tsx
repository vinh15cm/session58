import axios from "axios";
import { useEffect, useState } from "react";
import "./BT06.scss";

interface Student {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  status: string;
  create_at: string;
}

export default function BT06() {
  const [infor, setInfor] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8100/students")
      .then((res) => {
        setInfor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Quản lí sinh viên</h1>
        <button>
          <span className="material-symbols-outlined">add</span>
          <span>Thêm mới sinh viên</span>
        </button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Lựa chọn</th>
            </tr>
          </thead>
          <tbody>
            {infor.map((item: Student) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td style={{ display: "flex" }}>
                  <button>
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button>
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <div className="pagination-info">Hiển thị 5/10 bản ghi</div>
        <div className="pagination-controls">
          <div className="disabled">Trước</div>
          <div className="page">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          <div>Sau</div>
        </div>
      </div>
    </div>
  );
}
