$(document).ready(function () {
    $("#questionForm").validate({ rules: { name: { required: !0 }, email: { required: !0, email: !0 }, mobile: { required: !0, minlength: 10, maxlength: 10, number: !0 }, message: { required: !0 } } });
}),
    $(document).ready(function () {
        $("#contactForm").validate({
            rules: {
                name: { required: !0 },
                email: { required: !0, email: !0 },
                mobile: { required: !0, minlength: 10, maxlength: 10, number: !0 },
                location: { required: !0 },
                state: { required: !0 },
                message: { required: !0 },
            },
        });
    }),
    $(document).ready(function () {
        $("#homeQueryForm").validate({ rules: { name: { required: !0 }, email: { required: !0, email: !0 }, mobile: { required: !0, minlength: 10, maxlength: 10, number: !0 }} });
    }),
    $(document).ready(function () {
        $("#applyForm").validate({ rules: { name: { required: !0 }, email: { required: !0, email: !0 }, mobile: { required: !0, minlength: 10, maxlength: 10, number: !0 }, resume: { required: !0 } } });
    });
