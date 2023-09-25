import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplate } from "../store/ApplicationFormSlice";
import { useParams } from "react-router-dom";

const useBookDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { programId } = useSelector((state) => state.programId);
    useEffect(() => {
        dispatch(getTemplate(id));
    }, [dispatch, id]);
    console.log(programId)
    return { programId };
};

export default useBookDetails;