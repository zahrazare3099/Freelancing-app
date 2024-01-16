import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import RHFSelection from "./RHFSelection";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "./DatePickerField";
import { useState } from "react";
import TextFiled from "./TextFiled";
import useCategory from "../hooks/useCategory";
import useCreateProject from "../Features/projects/useCreateProject";
import useEditProject from "../Features/projects/useEditProject";

export default function ProjectForm({ setIsOpen, projectToEdit = {} }) {
  // handle editing project
  const {
    _id: editId,
    title,
    description,
    budget,
    deadline,
    category,
    tags: prevTags,
  } = projectToEdit;

  // initial states
  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(deadline || new Date());
  const { categories, loadingCategory } = useCategory();
  const { createProject } = useCreateProject();
  const { editProject } = useEditProject();

  // handle input validation
  const RegisterOption = {
    title: {
      required: "فیلد عنوان پروژه ضروری می باشد",
      maxLength: {
        value: 20,
        message: "تعداد کاراکتر بیش از حد مجاز می باشد",
      },
      minLength: {
        value: 10,
        message: "تعداد کاراکتر کمتر از حداقل مجاز می باشد",
      },
    },
    categury: {
      required: "فیلد دسته بندی ضروری می باشد",
      maxLength: {
        value: 20,
        message: "تعداد کاراکتر بیش از حد مجاز می باشد",
      },
      minLength: {
        value: 10,
        message: "تعداد کاراکتر کمتر از حداقل مجاز می باشد",
      },
    },
    budget: {
      required: "فیلد بودجه ضروری می باشد",
      maxLength: {
        value: 15,
        message: "تعداد کاراکتر بیش از حد مجاز می باشد",
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "تنها مفدار عددی قابل قبول است",
      },
    },
  };
  // convert to Bolean data >> using in condition loop
  const isEditSession = Boolean(editId);
  // handle to moods with initial editValues
  let editValues = {};
  // if on edit mood fill theme with these parameter
  // >> pass to defaultValues in form hook
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      deadline: new Date(deadline)?.toISOString(),
      category: category?._id,
    };
  }
  // declare form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    // to fill inputs
    defaultValues: editValues,
    mode: "onChange",
  });
  // handle form submit
  const onSubmit = (data) => {
    // create new project
    const newProject = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
    };
    //   check edit mood to pass own Fn
    if (isEditSession) {
      // in editMood Fn
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            setIsOpen(false);
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          setIsOpen(false);
          reset();
        },
      });
    }
    reset();
  };
  const onError = (data) => {
    toast.error(data?.response?.data?.message);
    reset();
  };
  return (
    <div>
      <form
        className="flex flex-col gap-y-3 justify-between"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="flex gap-2 flex-wrap grow">
          <span className="w-44 md:w-52 lg:w-44 grow">
            <TextFiled
              name="title"
              label="عنوان پروژه"
              register={register}
              validationSchema={RegisterOption.title}
              required
              errors={errors}
            />
          </span>
          <span className="w-44 md:w-52 lg:w-44 grow">
            <TextFiled
              name="description"
              label="توضیحات"
              register={register}
              validationSchema={RegisterOption.categury}
              required
              errors={errors}
            />
          </span>
          <span className="w-44 md:w-52 lg:w-44 grow">
            <TextFiled
              name="budget"
              label="بودجه"
              register={register}
              validationSchema={RegisterOption.budget}
              required
              errors={errors}
              type="number"
            />
          </span>
          <span className="w-44 md:w-52 lg:w-44 grow">
            <RHFSelection
              label="دسته بندی"
              name="categury"
              register={register}
              options={[
                { value: "programming", label: "برنامه نویسی" },
                { value: "design", label: "طراحی" },
                { value: "SEO", label: "سئو" },
              ]}
              loadingCategory={loadingCategory}
              errors={errors}
              required
            />
          </span>
          <span className="w-44 md:w-52 lg:w-44 grow flex flex-col gap-y-2">
            <label htmlFor="tags" className="px-2">
              تگ
            </label>
            <TagsInput name="tags" value={tags} onChange={setTags} />
          </span>
          <span className="w-44 md:w-52 lg:w-44 grow">
            <DatePickerField
              label="ددلاین پروژه"
              date={date}
              setDate={setDate}
            />
          </span>
        </div>
        <div className="flex justify-between gap-x-6 pt-3 pb-1">
          <button type="submit" className="btn btn--primary flex-1">
            تایید
          </button>
          <button
            type=""
            className="btn btn--outline flex-1"
            onClick={() => setIsOpen(false)}
          >
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}
