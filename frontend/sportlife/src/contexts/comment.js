import { createContext, useState } from "react";

export const CommentContext = createContext({})

export const CommentProvider = ({children}) => {
	const [openComment, setOpenComment] = useState(false)

	const manupilationCommentOpen = () => {
        setOpenComment(true)
	}

    const manupilationCommentClose = () => {
        setOpenComment(false)
	}

    return (
        <CommentContext.Provider
            value={{
			    manupilationCommentOpen, manupilationCommentClose , openComment, setOpenComment
            }}
        >
            {children}
        </CommentContext.Provider>
    )
}
