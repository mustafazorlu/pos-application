import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import AddCategoriesModal from "../modals/AddCategoriesModal";
import "../styles/categories.css";
import EditCategoriesModal from "../modals/EditCategoriesModal";

const Categories = ({ categories, setCategories }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    return (
        <ul className="flex md:flex-col gap-4">
            {categories.map((item, index) => (
                <li key={index} className="category-item">
                    <span>{item.title}</span>
                </li>
            ))}
            <li
                onClick={() => setIsAddModalOpen(true)}
                className="category-item !bg-purple-800 hover:opacity-90"
            >
                <span>{<PlusOutlined className="" />}</span>
            </li>
            <li
                onClick={() => setIsEditModalOpen(true)}
                className="category-item !bg-orange-800 hover:opacity-90"
            >
                <span>{<EditOutlined className="" />}</span>
            </li>
            <AddCategoriesModal
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
                categories={categories}
                setCategories={setCategories}
            />
            <EditCategoriesModal
                isEditModalOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                categories={categories}
                setCategories={setCategories}
            />
        </ul>
    );
};

export default Categories;
