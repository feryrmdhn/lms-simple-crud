import { FC } from "react";
import { Center, Text } from "@chakra-ui/react";

const NotFound: FC = () => {
    return (
        <>
            <Center>
                <Text fontSize={24}>PAGE NOT FOUND</Text>
            </Center>
        </>
    )
}

export default NotFound;

const [newLessonData, setNewLessonData] = useState<Array<any>>([])


//Add lesson
const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
        let merge = Object.assign(values, { idSession: getIdSession }, { isPreview: values.isPreview === "1" ? true : false }, { isRequired: values.isRequired === "1" ? true : false })
        let join = [...newLessonData[0], merge]
        console.log(join)
        resetForm()
        setData([
            ...data,
            ...join
        ])
    },
})

const openModalAdd = (id: number) => {
    setGetIdSession(id)
    onOpen()
}

onChange = {(value) => formik.setFieldValue('typeLesson', value)} defaultValue = { initialValues.typeLesson }