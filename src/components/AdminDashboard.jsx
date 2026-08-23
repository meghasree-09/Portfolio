import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject
} from "../api/projectApi";


function AdminDashboard() {

  const navigate = useNavigate();


  const emptyForm = {
    title: "",
    description: "",
    technologies: "",
    image: "",
    github: "",
    liveDemo: ""
  };


  const [projects, setProjects] = useState([]);

  const [form, setForm] =
    useState(emptyForm);

  const [editingId, setEditingId] =
    useState(null);

  const [message, setMessage] =
    useState("");


  const loadProjects = async () => {

    try {

      const data =
        await getProjects();

      setProjects(data);

    } catch (error) {

      console.error(
        "Error loading projects:",
        error
      );

    }

  };


  useEffect(() => {

    loadProjects();

  }, []);


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const projectData = {

        title: form.title,

        description:
          form.description,

        technologies:
          form.technologies
            .split(",")
            .map((item) =>
              item.trim()
            )
            .filter(Boolean),

        image: form.image,

        github: form.github,

        liveDemo:
          form.liveDemo

      };


      if (editingId) {

        await updateProject(
          editingId,
          projectData
        );

        setMessage(
          "Project updated successfully!"
        );

      } else {

        await createProject(
          projectData
        );

        setMessage(
          "Project added successfully!"
        );

      }


      setForm(emptyForm);

      setEditingId(null);

      await loadProjects();

    } catch (error) {

      console.error(error);

      setMessage(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }

  };


  const handleEdit = (project) => {

    setEditingId(
      project._id
    );


    setForm({

      title:
        project.title || "",

      description:
        project.description || "",

      technologies:
        project.technologies
          ? project.technologies.join(", ")
          : "",

      image:
        project.image || "",

      github:
        project.github || "",

      liveDemo:
        project.liveDemo || ""

    });


    setMessage("");

  };


  const handleCancelEdit = () => {

    setEditingId(null);

    setForm(emptyForm);

    setMessage("");

  };


  const handleDelete = async (id) => {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this project?"
      );


    if (!confirmed) {
      return;
    }


    try {

      await deleteProject(id);

      setMessage(
        "Project deleted successfully!"
      );

      await loadProjects();

    } catch (error) {

      console.error(error);

      setMessage(
        "Failed to delete project"
      );

    }

  };


  const logout = () => {

    sessionStorage.removeItem(
      "adminToken"
    );

    navigate("/admin/login");

  };


  return (

    <div className="admin-dashboard">

      <div className="admin-header">

        <div>

          <p>PORTFOLIO ADMIN</p>

          <h1>
            Dashboard
          </h1>

        </div>


        <button
          onClick={logout}
          className="secondary-btn"
        >
          Logout
        </button>

      </div>


      <div className="admin-content">


        {/* ADD / EDIT */}

        <div className="admin-form-card">

          <h2>

            {editingId
              ? "Edit Project"
              : "Add New Project"}

          </h2>


          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={form.title}
              onChange={handleChange}
              required
            />


            <textarea
              name="description"
              placeholder="Project Description"
              value={form.description}
              onChange={handleChange}
              required
            />


            <input
              type="text"
              name="technologies"
              placeholder="React, Node.js, MongoDB"
              value={form.technologies}
              onChange={handleChange}
            />


            <input
              type="text"
              name="image"
              placeholder="Project Image URL"
              value={form.image}
              onChange={handleChange}
            />


            <input
              type="text"
              name="github"
              placeholder="GitHub URL"
              value={form.github}
              onChange={handleChange}
            />


            <input
              type="text"
              name="liveDemo"
              placeholder="Live Demo URL"
              value={form.liveDemo}
              onChange={handleChange}
            />


            <div className="admin-form-buttons">

              <button
                type="submit"
                className="primary-btn"
              >

                {editingId
                  ? "Update Project"
                  : "Add Project"}

              </button>


              {editingId && (

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={
                    handleCancelEdit
                  }
                >
                  Cancel
                </button>

              )}

            </div>

          </form>


          {message && (

            <p className="admin-message">
              {message}
            </p>

          )}

        </div>


        {/* PROJECT LIST */}

        <div className="admin-projects">

          <h2>
            Your Projects
          </h2>


          {projects.length === 0 ? (

            <p>
              No projects found.
            </p>

          ) : (

            projects.map(
              (project) => (

                <div
                  className="admin-project-card"
                  key={project._id}
                >

                  <div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                  </div>


                  <div className="admin-project-actions">

                    <button
                      className="edit-btn"
                      onClick={() =>
                        handleEdit(project)
                      }
                    >
                      Edit
                    </button>


                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(
                          project._id
                        )
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              )
            )

          )}

        </div>

      </div>

    </div>

  );
}


export default AdminDashboard;