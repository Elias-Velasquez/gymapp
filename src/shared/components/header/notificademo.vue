<div class="header-element notifications-dropdown">
                    <!-- Start::header-link|dropdown-toggle -->
                    <a href="javascript:void(0);" class="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
                        <i class="bx bx-bell header-link-icon"></i>
                        <span class="badge bg-secondary rounded-pill header-icon-badge pulse pulse-secondary" id="notification-icon-badge">
                            {{notificationList.length}}
                        </span>
                    </a>
                    <!-- End::header-link|dropdown-toggle -->
                    <!-- Start::main-header-dropdown -->
                    <div class="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                        <div class="p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="mb-0 fs-17 fw-semibold">Notifications</p>
                                <span class="badge bg-secondary-transparent" id="notifiation-data">{{notificationList.length}} Unread</span>
                            </div>
                        </div>
                        <div class="dropdown-divider"></div>
                        <ul v-if="notificationList.length" class="list-unstyled mb-0" id="header-notification-scroll">
                            <li v-for="(item, key) in notificationList" :key=key class="dropdown-item">
                                <div class="d-flex align-items-start">
                                        <div class="pe-2">
                                            <span class="avatar avatar-md avatar-rounded" :class="item.iconBg"><i class="fs-18" :class=item.icon></i></span>
                                        </div>
                                        <div class="flex-grow-1 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-0 fw-semibold"><router-link to="/pages/notifications" class="text-dark" v-html="item.title"></router-link></p>
                                            <span class="text-muted fw-normal fs-12 header-notification-text">{{item.description}}</span>
                                        </div>
                                        <div>
                                            <a @click=removeNotification(item) href="javascript:void(0);" class="min-w-fit-content text-muted me-1 dropdown-item-close1"><i class="ti ti-x fs-16"></i></a>
                                        </div>
                                        </div>
                                </div>
                            </li>
                        </ul>
                        <div v-if="notificationList.length" class="p-3 empty-header-item1">
                            <div class="d-grid">
                                <router-link to="/pages/notifications" class="btn btn-primary">View All</router-link>
                            </div>
                        </div>
                        <div v-if="!notificationList.length" class="p-5 empty-item1">
                            <div class="text-center">
                                <span class="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                    <i class="ri-notification-off-line fs-2"></i>
                                </span>
                                <h6 class="fw-semibold mt-3">No New Notifications</h6>
                            </div>
                        </div>
                    </div>
                    <!-- End::main-header-dropdown -->
                </div>