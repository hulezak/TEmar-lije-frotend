import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./FirebaseConfig";
import "./Books.css";
import Loader from "./Loader";

const Books = () => {
  const [imageList, setImageList] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("9");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImageList = async () => {
      setLoading(true);
      try {
        const imageListRef = ref(storage, `books/g${selectedGrade}`);
        // const imageListRef = ref(storage, 'pdftextbook');
        const response = await listAll(imageListRef);
        console.log("response movie", response);
        const urls = await Promise.all(
          response.items.map(async (item) => {
            const url = await getDownloadURL(item);

            console.log(item._location.path_, url);

            return url;
          })
        );
        setImageList(urls);
      } catch (error) {
        console.error("Error fetching image list:", error);
      } finally {
        setLoading(false); // Set loading back to false after fetching data
      }
    };

    fetchImageList();
  }, [selectedGrade]);

  const handleGradeChange = (event) => {
    const grade = event.target.value;
    setSelectedGrade(grade);
  };

  return (
    <div className="Books_page">
      <div className="books-page-header">
        <h1>Download any Textbook</h1>

        <label htmlFor="Grade_list" className="Grade_list_label">
          Grade{" "}
        </label>
        <select
          className="Grade-list"
          id="Grade_list"
          value={selectedGrade}
          onChange={handleGradeChange}
        >
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>

      <div className="list-of-books">
        {loading ? ( // Show loader if loading state is true
          <Loader />
        ) : (
          imageList.map((url, index) => (
            <div className="img-container" key={index}>
              <img src={url} alt={`Book ${index}`} />
              <div className="book-buttons">
                <button className=" btn download_btn">Download</button>
                <button className=" btn open_btn">Open</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Books;
