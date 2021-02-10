import React from "react";
import FadeIn from "react-fade-in";
import { firestore } from "../firebase/config";
import MemoryCard from "../components/Card";
import NewMemory from "../components/NewMemory";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function MemoryPage() {
  const memoriesRef = firestore.collection("memories");
  const query = memoriesRef.orderBy("createdAt", "desc");
  const [memoriesData, loading, error] = useCollectionData(query, {
    idField: "id",
  });
  if (loading || error) console.log("loading : ", loading, error);

  return (
    <div className="App">
      <div className="newMemoryTrigger">
        <NewMemory />
      </div>

      <FadeIn className="card-grid">
        {memoriesData &&
          memoriesData.map((post) => (
            <div className="card-wrap">
              <MemoryCard key={post.id} post={post} />
            </div>
          ))}
      </FadeIn>
    </div>
  );
}
