import {CommentForm} from "@/app/components/comment-form";

export default function FooterForm() {
    return (
        <div className={`pb-5`}>
            <h3>Laissez votre avis</h3>
            <div className="trait"></div>
            <CommentForm />
        </div>
    )
}